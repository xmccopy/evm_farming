import ChangeSetting from "@/app/components/ChangeSetting"
import Title from "@/app/components/Title"

export default function Home() {
    return (
        <>
            <div>
                <Title label="マイページ" />
                <ChangeSetting title="メールアドレス変更" subvalue="SAMPLE@MAILE.jp"/>
            </div>
        </>
    )
}
