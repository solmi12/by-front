export interface Tool {
    toolId?: number | null;
    toolName: string;
    description: string;
    price:number;
    category: {
      categoryName: string;
    };
    imageData: string;
    promotionStartDate?: string | null;  
    promotionEndDate?: string | null;    
    discountedPrice?: number | null;
    totalPrice?: number | null;
  }
  
  export interface Category {
    categoryId: number;
    categoryName: string;
    tools: Tool[];
  }
  