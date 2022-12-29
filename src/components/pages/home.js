import MainLayout from "../../layout/mainLayout";

const Home = () => {
  return (
    <MainLayout>
      <div className="px-10 flex-1 flex justify-center items-center">
        <h1 className="text-8xl text-primary-600 text-center font-poppinsBold">
          This is Home Page
        </h1>
      </div>
    </MainLayout>
  )
}

export default Home;