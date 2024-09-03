import Head from 'next/head';

export default function Dashboard() {
    return (
        <div className=" flex flex-col items-center justify-start text-white">
            <Head>
                <title>Dashboard</title>
            </Head>

            <div className="m-auto w-64 h-64">
                {/* Placeholder for the graphic */}
                <img
                    src="/images/main.png"
                    alt="Sign Up Graphic"
                    className="w-full h-full"
                />
            </div>


            <h1 className="text-3xl font-bold mb-8">EVM ファーミング</h1>

            <button className="w-64 py-2 mb-4 text-[20px] font-semibold bg-[linear-gradient(160deg,_#665DCD_0%,_#5FA4E6_44.76%,_#D2AB67_100%)] hover:bg-[linear-gradient(200deg,_#665DCD_0%,_#5FA4E6_44.76%,_#D2AB67_100%)] rounded-[30px] shadow-md transition-all duration-1000 ease-in-out">
                ライセンス購入
            </button>

            <p className="mb-4">フリーミアムウォレット</p>
            <p className="mb-8 text-center">フリーミアムウォレットはまだありません。<br />まずは作成しましょう。</p>

            <button className="w-64 py-3 text-[14px] mb-12 font-semibold bg-[linear-gradient(107.21deg,_#9348A2_24.43%,_#2954A3_68.95%)] hover:bg-[linear-gradient(200.21deg,_#9348A2_24.43%,_#2954A3_68.95%)] rounded-[30px] shadow-md transition-all duration-1000 ease-in-out hover:ease-out">
                + ウォレットをインポート
            </button>
        </div>
    );
}
