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
