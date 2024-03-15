import { Component, OnInit } from '@angular/core';
import { ToolService } from '../tool.service.ts.service';
import { Category, Tool } from 'src/app/models/tool.model';


@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.css']
})
export class ToolComponent implements OnInit {

  tools: Tool[] = [];
  categories: Category[] = [];
  searchToolName: string = '';  
  constructor(private toolService: ToolService) { }

  ngOnInit(): void {
    // Call the function to get all tools when the component initializes
    this.getAllTools();
    this.getCategories();
    
  }

  getAllTools(): void {
    // Use the toolService to get all tools
    this.toolService.getAllTools().subscribe(
      (tools) => {
        // Set the received tools to the component property
        this.tools = tools;
        console.log('All tools:', this.tools);  // Log the assigned tools
      },
      (error) => {
        // Handle errors, such as displaying an error message
        console.error('Error fetching tools:', error);
      }
    );
  }

  searchToolsByToolName(): void {
    this.toolService.getToolsByToolName(this.searchToolName).subscribe(
      (tools) => {
        this.tools = tools;
        console.log(`Tools filtered by tool name '${this.searchToolName}':`, this.tools);
      },
      (error) => {
        console.error(`Error fetching tools for tool name '${this.searchToolName}':`, error);
      }
    );
  }
  
// tool.component.ts
getCategories(): void {
  this.toolService.getAllTools().subscribe(
    (tools) => {
      this.categories = Array.from(new Set(tools.map(tool => tool.category?.categoryName)))
        .map(categoryName => ({ categoryId: 0, categoryName, tools: [] }));
    
      console.log('All categories:', this.categories);
    },
    (error) => {
      console.error('Error fetching categories:', error);
    }
  );
}

// tool.component.ts
filterToolsByCategory(categoryName: string): void {
  this.toolService.getToolsByCategory(categoryName).subscribe(
    (tools) => {
      this.tools = tools;
      console.log(`Tools filtered by category '${categoryName}':`, this.tools);
    },
    (error) => {
      console.error(`Error fetching tools for category '${categoryName}':`, error);
    }
  );
}

  
}
