import axios from 'axios';

export interface Author {
  id: number;
  image: string;
  following: boolean;
}

export interface Article {
  id: number;
  slug: string;
  title: string;
  description: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  tagList: string[];
  author: Author;
  favoritesCount: number;
  favorited: boolean;
}

export interface ApiResponse {
  articles: Article[];
  articlesCount: number;
}

export const fetchArticles = async (): Promise<ApiResponse> => {
  try {
    const response = await axios.get<ApiResponse>('https://realword-api.nouwillcode.com/api/articles');
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des articles:', error);
    throw error;
  }
};
