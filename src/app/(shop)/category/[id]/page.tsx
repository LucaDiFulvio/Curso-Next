import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

const seedProducts= initialData.products
const labels: Record<Category, string>={
    men: "para hombres",
    women: "para mujeres",
    kid: "para niños",
    unisex: "para todos"
}


interface Props {
    params: {
        id: Category
    }
}
export default function({params}:Props) {
    const {id} = params 
    const products= seedProducts.filter(product => product.gender === id)

    // if(id==="kids") {
    //     notFound()
    // }

    return (
        <>
        <Title
        title={`Articulos ${(labels as any)[id]}`}
        subtitle="Todos los productos"
        className="mb-2"
        />
    
        <ProductGrid products={products} />
    
        </>
    );
}