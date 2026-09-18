export interface Article {
  title: string;
  url: string;
  date: string;
  publication: string;
}

// Empty initially — add articles here to populate the Writing section.
// When empty, the component renders a graceful placeholder state.
export const articles: Article[] = [];
