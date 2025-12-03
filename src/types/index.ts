export interface Category {
  id: number;
  title: string;
  imageUrl: string;
}

export interface CategoryItemProps {
  category: Category;
}

export interface CategoriesListProps {
  categories: Category[];
}

export type Categories = Category[];

export type userData = {
  displayName: string;
  email: string;
  createdAt: Date;
};

export type Error = {
  message: string;
};
