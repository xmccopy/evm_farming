import ChangeSetting from "@/app/components/ChangeSetting"
import Title from "@/app/components/Title"

export default function Home() {
    return (
        <>
            <div>
                <Title label="マイページ" />
                <ChangeSetting title="パスワード変更" subvalue="12345678"/>
            </div>
        </>
    )
}
