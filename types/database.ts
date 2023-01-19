export interface Author {
  id: string;
  first_name: string;
  last_name: string;
}

export interface Category {
  id: string;
  title: string;
  slug: string;
  description: string;
}

export interface CategoryWithPosts extends Category {
  posts: Post[];
}

interface CategoryForPost {
  id: string;
  title: string;
}

export interface Post {
  id: string;
  title: string;
  description: string;
  slug: string;
  image: string;
  body: string;
  date_created: string;
  date_updated?: string;
  category: CategoryForPost;
  author: Author;
}
