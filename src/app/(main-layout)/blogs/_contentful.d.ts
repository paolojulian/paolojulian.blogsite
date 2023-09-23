export interface IBlogPost {
  content: string;
  description: string;
  slug: string;
  tags: string[];
  sys: {
    publishedAt: string;
    firstPublishedAt: string;
  }
  title: string;
  banner: {
    url: string;
    width: number;
    height: number;
  }
}