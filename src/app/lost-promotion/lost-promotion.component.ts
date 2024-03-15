import { Component, OnInit } from '@angular/core';
import { Tool } from '../models/tool.model';
import { ToolService } from '../services/tool.service.ts.service';

@Component({
  selector: 'app-lost-promotion',
  templateUrl: './lost-promotion.component.html',
  styleUrls: ['./lost-promotion.component.css']
})
export class LostPromotionComponent implements OnInit{

  tools: Tool[] = [];

  constructor(private toolService: ToolService) {}

  ngOnInit(): void {
    this.getToolsByDiscountedPrice();
  }

  getToolsByDiscountedPrice(): void {
    this.toolService.getToolsByDiscountedPriceNotNull().subscribe(
      (tools) => {
        this.tools = tools;
      },
      (error) => {
        console.error('Error fetching tools with discounted prices:', error);
      }
    );
  }

  // Modify your update method
  updateToolWithoutPromotion(toolId: number): void {
    // Show a confirmation dialog
    const isConfirmed = confirm('Are you sure you want to update without promotion?');

    // If the user confirms, call the update method
    if (isConfirmed) {
      this.updateToolWithoutPromotionConfirmed(toolId);
    }
  }

updateToolWithoutPromotionConfirmed(toolId: number): void {
  const toolToUpdate = this.tools.find(tool => tool.toolId === toolId);

  if (toolToUpdate) {
    // Set specific properties to null
    toolToUpdate.promotionStartDate = '';
    toolToUpdate.promotionEndDate = '';
    toolToUpdate.discountedPrice = 0;
    toolToUpdate.totalPrice = 0;

    // Update the tool via the service
    this.toolService.updateTool(toolId, toolToUpdate).subscribe(
      (updatedTool) => {
        console.log('Tool updated without promotion:', updatedTool);

        // Remove the tool from the local tools array
        this.tools = this.tools.filter(tool => tool.toolId !== toolId);
      },
      (error) => {
        console.error('Error updating tool without promotion:', error);
      }
    );
  }
}

}
