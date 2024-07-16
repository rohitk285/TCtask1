
const MainPage = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center" style={{
        backgroundColor:'#23395d'
      }}>
        <div className="p-8">
        <h1 className="text-4xl font-bold mb-4 text-white">Welcome to Freelancopia!</h1>
        <p className="text-xl mb-8 font-semibold text-white">NITT's Exclusive Freelancing Platform</p>
        <button className="bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded-full font-semibold">Click here to Register</button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-3 mt-10" style={{
        backgroundColor:'#fff'
      }}>
        <div className="card">
          <h2 className="features">Curated Roadmaps</h2>
          <img src="../assets/roadmap.png" alt="image" style={{
            height:'70px',
            width:'70px'
          }}/>
          <p className="features-text">
          Get your hands on exclusive roadmaps for any domain and start off your freelancing career.</p>
        </div>
        <div className="card">
          <h2 className="features">Interact with Seniors</h2>
          <img src="../assets/interact.png" alt="image" style={{
            height:'70px',
            width:'70px'
          }}/>
          <p className="features-text">
          Boost your networking and your freelancing career by connecting with your seniors</p>
        </div>
        <div className="card">
          <h2 className="features">NITT clubs/communities</h2>
          <img src="../assets/logo.png" alt="image" style={{
            height:'70px',
            width:'70px'
          }}/>
          <p className="features-text">
          Information of every clubs/communities of NITT at your fingertips</p>
        </div>
        <div className="card">
          <h2 className="features">Showcase your skillset</h2>
          <img src="../assets/skill.png" alt="image" style={{
            height:'70px',
            width:'70px'
          }}/>
          <p className="features-text">
          Register now and upload your projects to create a portfolio and boost your credibility</p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
