import { BigQuery } from "@google-cloud/bigquery";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).end(); // Method Not Allowed
    return;
  }

  try {
    // Parse the JSON body from the request
    const { title, body } = req.body;
    console.log("title", title);
    console.log("body", body);

    // Specify the BigQuery project, dataset, and table IDs
    const projectId = process.env.GCLOUD_PROJECT;
    const datasetId = process.env.DATASET_ID;
    const tableId = process.env.TABLE_ID;
    const keyFilename = "bigquery-key.json";

    // Create a BigQuery client
    const bigquery = new BigQuery({
      projectId,
      keyFilename,
    });

    // Build the SQL query
    const sqlQuery = `
      INSERT INTO \`${projectId}.${datasetId}.${tableId}\` (title, body)
      VALUES (@title, @body)
    `;

    // Run the SQL query as a job in BigQuery
    const queryOptions = {
      query: sqlQuery,
      location: "US", // Set the appropriate location for your dataset
      params: {
        title,
        body,
      },
    };
    const [job] = await bigquery.createQueryJob(queryOptions);

    // Wait for the query job to complete
    const [rows] = await job.getQueryResults();

    res.status(200).json({ message: "Post created successfully" });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
