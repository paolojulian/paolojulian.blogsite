export interface IBlogPost {
  content: string;
  description: string;
  slug: string;
  tags: string[];
  sys: {
    publishedAt: string;
  }
  title: string;
  banner: {
    url: string;
  }
}