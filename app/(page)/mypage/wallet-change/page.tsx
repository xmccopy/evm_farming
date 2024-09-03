import ChangeSetting from "@/app/components/ChangeSetting"
import Title from "@/app/components/Title"

export default function Home() {
    return (
        <>
            <div>
                <Title label="マイページ" />
                <ChangeSetting title="報酬受取アドレス変更" subvalue="TQtA821t19mL2dWJD4KiQWmRMxxKhKjaGz" resultConfirm="報酬受取アドレスを変更しました"/>
            </div>
        </>
    )
}
