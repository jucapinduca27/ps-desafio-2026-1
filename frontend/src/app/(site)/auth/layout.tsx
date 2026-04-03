import Header from "../_components/Header";

export default function LayoutSite({children}:{children:React.ReactNode}){
    return (
        <div>
            <Header/>
            {children}
        </div>
    )
}
