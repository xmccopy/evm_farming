import ChangeSetting from "@/app/components/ChangeSetting"
import Title from "@/app/components/Title"
import withAuth from "@/app/components/withAuth"

const Home = () => {
    return (
        <>
            <div>
                <Title label="マイページ" />
                <ChangeSetting title="メールアドレス変更" subvalue="SAMPLE@MAILE.jp" resultConfirm="メールアドレスを変更しました"/>
            </div>
        </>
    )
}

export default withAuth(Home);