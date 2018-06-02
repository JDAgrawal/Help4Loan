import { Component, ViewChild, Renderer, OnInit, Input } from '@angular/core';




@Component({
  selector: 'accordion',
  templateUrl: 'accordion.html'
})

export class AccordionComponent implements OnInit
{
	isAccordionOpen = false;
	@Input() heading;
	@Input() content;

	@ViewChild('cardContent') cardContent: any;

	constructor(private renderer: Renderer) 
	{
	}

	ngOnInit()
	{
		console.log(this.cardContent.nativeElement);
		this.renderer.setElementStyle(this.cardContent.nativeElement, "webkitTransition", "max-height 200ms, padding 200ms");
	}

	toggleAccordion()
	{
		if(this.isAccordionOpen)
		{
			this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height","0px");
			this.renderer.setElementStyle(this.cardContent.nativeElement, "padding","0px 16px");
		}
		else
		{
			this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height","900px");
			this.renderer.setElementStyle(this.cardContent.nativeElement, "padding","13px 16px");
		}
		this.isAccordionOpen = !this.isAccordionOpen;
	}
}
