import { Component, OnInit } from '@angular/core';
import { Tool } from '../models/tool.model';
import { ToolService } from '../services/tool.service.ts.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent, ConfirmDialogData } from '../confirm-dialog/confirm-dialog.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-tools-admin',
  templateUrl: './list-tools-admin.component.html',
  styleUrls: ['./list-tools-admin.component.css']
})
export class ListToolsAdminComponent implements OnInit{
  tools: Tool[] = [];

    toolId: number | undefined;

  constructor(private toolService: ToolService,private dialog: MatDialog,private route: ActivatedRoute) { }

  ngOnInit(): void{

    this.getAllTools();
    this.route.params.subscribe((params) => {
      this.toolId = +params['toolId'];
      // Now you can use this.toolId in your component logic
      console.log('Tool ID:', this.toolId);
    });
    
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
  deleteTool(toolId: number | null | undefined): void {
    if (toolId !== undefined && toolId !== null) {
      const dialogData: ConfirmDialogData = {
        title: 'Confirmation',
        message: 'Are you sure you want to delete this tool?',
      };
  
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        data: dialogData,
      });
  
      dialogRef.afterClosed().subscribe((result) => {
        if (result === true) {
          // User clicked Yes, proceed with deletion
          this.toolService.deleteTool(toolId).subscribe(
            () => {
              // Remove the deleted tool from the tools array
              this.tools = this.tools.filter((tool) => tool.toolId !== toolId);
            },
            (error) => {
              console.error('Error deleting tool:', error);
            }
          );
        }
      });
    } else {
      console.error('Invalid toolId:', toolId);
    }
  }
  

  openDeleteConfirmationDialog(tool: Tool): void {
    const dialogData: ConfirmDialogData = {
      title: 'Confirmation',
      message: `Are you sure you want to delete ${tool.toolName}?`,
    };

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.deleteTool(tool.toolId);
      }
    });
  }
}
