import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToolService } from '../services/tool.service.ts.service';
import { Tool } from '../models/tool.model';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent {

  toolId: number | undefined;
  promotionStartDate: string | null | undefined;
  promotionEndDate: string | null | undefined;
  discountedPrice: number | null | undefined;

  // Other properties from the original Tool model
  toolName: string = '';
  description: string = '';
  price: number = 0;
  category: { categoryName: string } = { categoryName: '' };
  imageData: string = '';

  constructor(private route: ActivatedRoute, private toolService: ToolService) {}

  ngOnInit(): void {
    // Retrieve the tool ID from the route parameter
    this.route.params.subscribe((params) => {
      this.toolId = +params['toolId'];
    });
  }

  addPromotion(): void {
    // Check if required promotion fields are set
    if (this.promotionStartDate && this.promotionEndDate && this.discountedPrice !== null) {
      // Retrieve the existing tool data
      this.toolService.getToolById(this.toolId!).subscribe(
        (existingTool) => {
          if (existingTool) {
            // Prepare the updated tool object with promotion information
            const updatedTool: Tool = {
              ...existingTool, // Spread the existing tool data
              promotionStartDate: this.promotionStartDate,
              promotionEndDate: this.promotionEndDate,
              discountedPrice: this.discountedPrice,
            };
  
            // Call the updateTool method in your service to add the promotion
            this.toolService.updateTool(this.toolId!, updatedTool).subscribe(
              (updatedTool) => {
                console.log('Promotion added successfully:', updatedTool);
                // Handle any additional logic or UI updates
              },
              (error) => {
                console.error('Error adding promotion:', error);
                // Handle error scenarios
              }
            );
          } else {
            console.error('Tool not found');
            // Handle the case where the tool is not found
          }
        },
        (error) => {
          console.error('Error fetching tool:', error);
          // Handle error scenarios when fetching the tool data
        }
      );
    } else {
      console.error('Incomplete promotion information');
      // Handle incomplete promotion information scenarios
    }
  }
  
  
}
