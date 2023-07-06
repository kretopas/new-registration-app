import { getPaginationItems } from "@helpers/pagination";
import PageLink from "./PageLink";
import "@assets/css/Pagination.css";

export type Props = {
	currentPage: number;
	lastPage: number;
	maxLength: number;
	setCurrentPage: (page: number) => void;
};

export default function Pagination({
	currentPage,
	lastPage,
	maxLength,
	setCurrentPage,
}: Props) {
	const pageNums = getPaginationItems(currentPage, lastPage, maxLength);

	return (
		<nav className="pagination" aria-label="Pagination" >
			<PageLink
				disabled={currentPage === 1}
				onClick={() => setCurrentPage(currentPage - 1)}
			>
				{"<"} ก่อนหน้า
			</PageLink>
			{pageNums.map((pageNum, idx) => (
				<PageLink
					key={idx}
					active={currentPage === pageNum}
					disabled={isNaN(pageNum)}
					onClick={() => setCurrentPage(pageNum)}
				>
					{!isNaN(pageNum) ? pageNum : '...'}
				</PageLink>
			))}
			<PageLink
				disabled={currentPage === lastPage}
				onClick={() => setCurrentPage(currentPage + 1)}
			>
				ต่อไป {">"}
			</PageLink>
		</nav>
	)
}