import {Investment} from "./investment";
import {filterItems} from "../commons/filterItems";

export function InvestmentList({ query, data }) {
    const items = filterItems(query, data);
    return (
        <div>
            {items.map((product) => (
                <Investment
                    key={product.id}
                    title={product.title}
                    completed={product.completed}
                />
            ))}
        </div>
    );
}