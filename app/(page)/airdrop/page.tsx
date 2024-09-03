import Table from "@/app/components/Table"
import Title from "@/app/components/Title"

export default function Home() {
  const sampleData = [
    {
      id: 1,
      name: "Tokenss",
      category: "xxxxx",
      price: 8.8,
      allprice: 1000
    },
    {
      id: 2,
      name: "Tokenss",
      category: "xxxxx",
      price: 8.8,
      allprice: 1000
    }, {
      id: 3,
      name: "Tokenss",
      category: "xxxxx",
      price: 8.8,
      allprice: 1000
    },
    {
      id: 4,
      name: "Tokenss",
      category: "xxxxx",
      price: 8.8,
      allprice: 1000
    }
  ]

  return (
    <>
      <div>
        <Title label="エアドロップ" />
        <div className="flex items-center justify-between">
          {sampleData.length > 0 ? (
            <Table data={sampleData} />
          ) : (
            <p className="text-left text-white text-[14px] leading-6">フリーミアム ウォレットはまだありません。<br/>
              まずは作成しましょう。</p>
          )}
        </div>
      </div>
    </>
  )
}
