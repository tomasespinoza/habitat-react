import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Route } from 'react-router-dom';
import listings from './components/listings';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';

// import listing from './listings/listing';
const client = new ApolloClient({
  uri: 'https://tomasespinoza.me/projects/habitat/graphql',
})
function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
       
        <div>
          <header>
            <Navbar />
            <Header />
          </header>
          <div className="content">

              <Route exact path="" component={listings} />
              <Route path="/listings" component={listings} />
              <Route path="/listings/:slug" component={listings} />

          </div>
          <Footer />
        </div>

      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
