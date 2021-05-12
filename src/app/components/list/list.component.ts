import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListDataType } from 'src/app/models/list-data-type';
import { Pager, PaginatorService } from 'src/app/services/paginator.service';


@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css', './../../app.component.css']
})
export class ListComponent implements OnChanges {
	@Input() data: any[];
	@Input() listDataType: ListDataType;
	public pagedData: any[];
	public pager: Pager;

	constructor(
		private readonly paginator: PaginatorService,
		private readonly router: Router
	) { }

	ngOnChanges() {
		if (this.data) {
			this.setPage(1);
		}
	}

	public setPage(page: number) {
		if (page < 1 || page > this.paginator.totalPages) {
			return;
		}

		// get pager object from service
		this.pager = this.paginator.getPager(this.data.length, page);

		// get current page of items
		this.pagedData = this.data.slice(this.pager.startIndex, this.pager.endIndex + 1);
	}

	public goToDetail(id: number) {
		switch (this.listDataType) {
			case (ListDataType.Character):
				this.router.navigate(["/character/" + id]);
				break;
			case (ListDataType.Episode):
				this.router.navigate(["/episode/" + id]);
				break;
			case (ListDataType.Location):
				this.router.navigate(["/location/" + id]);
				break;
		}
	}
}
