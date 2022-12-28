import MainLayout from "../../layout/mainLayout";

const Home = () => {
  return (
    <MainLayout>
      <div className="container px-10 h-full flex justify-center items-center">
        <h1 className="text-8xl text-primary-600 text-center font-poppinsBold">
          This is Home Page
        </h1>
      </div>
    </MainLayout>
  )
}

export default Home;