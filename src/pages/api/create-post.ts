import { google } from "googleapis";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).end(); // Method Not Allowed
    return;
  }

  try {
    // Parse the JSON body from the request
    const { title, body } = JSON.parse(req.body);

    // Authenticate with Google using the service account key file
    const auth = new google.auth.GoogleAuth({
      keyFile: "path/to/service-account-key.json",
      scopes: ["https://www.googleapis.com/auth/bigquery"],
    });

    // Create a BigQuery client
    const bigquery = google.bigquery({
      version: "v2",
      auth,
    });

    // Specify the BigQuery project, dataset, and table IDs

    const projectId = process.env.GCLOUD_PROJECT;
    const datasetId = process.env.DATASET_ID;
    const tableId = process.env.TABLE_ID;

    // Create the BigQuery table insert request
    const request = {
      projectId,
      datasetId,
      tableId,
      requestBody: {
        rows: [
          {
            json: {
              title,
              body,
            },
          },
        ],
      },
    };

    // Insert the row into the BigQuery table
    await bigquery.tabledata.insertAll(request);

    res.status(200).json({ message: "Post created successfully" });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
