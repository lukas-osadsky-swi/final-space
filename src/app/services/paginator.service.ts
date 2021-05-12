import { Injectable } from '@angular/core';
import * as _ from 'lodash';

export interface Pager {
	totalItems: number,
	currentPage: number,
	pageSize: number,
	totalPages: number,
	startPage: number,
	endPage: number,
	startIndex: number,
	endIndex: number,
	pages: number[]
}

@Injectable({
	providedIn: 'root'
})
export class PaginatorService {
	public startPage: number;
	public endPage: number;
	public totalPages: number;

	public getPager(totalItems: number, currentPage: number = 1, pageSize: number = 10): Pager {

		this.totalPages = Math.ceil(totalItems / pageSize);

		if (this.totalPages <= 5) {
			this.startPage = 1;
			this.endPage = this.totalPages;
		} else {
			if (currentPage <= 3) {
				this.startPage = 1;
				this.endPage = 5;
			} else if (currentPage + 1 >= this.totalPages) {
				this.startPage = this.totalPages - 4;
				this.endPage = this.totalPages;
			} else {
				this.startPage = currentPage - 2;
				this.endPage = currentPage + 2;
			}
		}

		// calculate start and end item indexes
		let startIndex = (currentPage - 1) * pageSize;
		let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

		// create an array of pages to ng-repeat in the pager control
		let pages = _.range(this.startPage, this.endPage + 1);

		// return object with all pager properties required by the view
		return {
			totalItems: totalItems,
			currentPage: currentPage,
			pageSize: pageSize,
			totalPages: this.totalPages,
			startPage: this.startPage,
			endPage: this.endPage,
			startIndex: startIndex,
			endIndex: endIndex,
			pages: pages
		};
	}
}
