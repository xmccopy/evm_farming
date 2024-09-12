import ChangeSetting from "@/app/components/ChangeSetting"
import Title from "@/app/components/Title"
import withAuth from "@/app/components/withAuth"

const Home = () => {
    return (
        <>
            <div>
                <Title label="マイページ" />
                <ChangeSetting title="パスワード変更" subvalue="12345678" resultConfirm="パスワードを変更しました"/>
            </div>
        </>
    )
}

export default withAuth(Home);