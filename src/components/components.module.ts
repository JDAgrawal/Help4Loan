import { NgModule } from '@angular/core';
import { AccordionComponent } from './accordion/accordion';
import { SearchableListComponent } from './searchable-list/searchable-list';
@NgModule({
	declarations: [AccordionComponent,
    SearchableListComponent],
	imports: [],
	exports: [AccordionComponent,
    SearchableListComponent]
})
export class ComponentsModule {}
