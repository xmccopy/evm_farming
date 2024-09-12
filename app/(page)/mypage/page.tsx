import MySetting from "@/app/components/MySetting"
import Title from "@/app/components/Title"
import withAuth from "@/app/components/withAuth"

const Home = () => {
    return (
        <>
            <div>
                <Title label="マイページ" />
                <div className="flex flex-col w-full gap-[12px] ">
                    <MySetting text title="メールアドレス" value="SAMPLE@MALE.jp" link="mypage/email-change" />
                    <MySetting psw title="パスワード" value="asdasdasd" link="mypage/psw-change" />
                    <MySetting text title="報酬受取アドレス" value="TQtA821t.....xxKhKjaGz" link="mypage/email-change" />
                </div>
            </div>
        </>
    )
}

export default withAuth(Home);