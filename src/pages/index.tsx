import { useSession } from "next-auth/react";
import Typography from "@mui/material/Typography";
import { Card, CardContent, CardHeader, Stack } from "@mui/material";
import { Grid } from "@mui/joy";
const blogPosts = [
  {
    title: "The Future of Artificial Intelligence",
    body: "Artificial Intelligence (AI) is revolutionizing various industries... From self-driving cars to personalized recommendations, AI has become an integral part of our lives...",
  },
  {
    title: "The Rise of Blockchain Technology",
    body: "Blockchain technology is transforming the way we conduct transactions... Its decentralized and secure nature ensures transparency and immutability...",
  },
  {
    title: "Augmented Reality: Bridging the Gap between Real and Virtual",
    body: "Augmented Reality (AR) is changing the way we interact with the world... By overlaying digital information onto the physical environment, AR offers endless possibilities...",
  },
  {
    title: "The Power of Big Data Analytics",
    body: "Big Data analytics is unlocking valuable insights from vast amounts of data... By leveraging advanced algorithms, organizations can make data-driven decisions...",
  },
  {
    title: "Cloud Computing: Empowering the Digital Era",
    body: "Cloud computing has revolutionized the way we store and access data... With its scalability and accessibility, businesses can streamline their operations...",
  },
  {
    title: "Cybersecurity: Protecting the Digital Frontier",
    body: "As technology advances, cybersecurity becomes more critical than ever... Safeguarding our data and privacy requires robust security measures and constant vigilance...",
  },
];

// Render the array of blog posts
const BlogPostList = () => (
  <Grid container spacing={2}>
    {blogPosts.map((post, index) => (
      <Grid xs={12} sm={6} md={4} key={index}>
        <Card key={index}>
          <CardHeader title={post.title} />
          <CardContent>
            <Typography>{post.body}</Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
);

export default function HomePage() {
  const { data: session, status } = useSession();

  return (
    <Stack spacing={2}>
      <Typography variant={"h2"}>Blog Posts</Typography>
      <Typography variant={"body1"}>
        Fuck it, let's make this a blog!
      </Typography>
      <BlogPostList />
    </Stack>
  );
}
