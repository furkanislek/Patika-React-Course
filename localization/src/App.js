
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";
import { useState } from "react";
import "./App.css";

const messages = {
  "tr-TR" : {
    title : "Merhaba Dünya"
  },

  "en-EN" : {
    title : "Hello World"
  }

};

function App() {
  const [lang, setLang] = useState("tr-TR");

  return (
    <div className="App">
      <IntlProvider messages={messages[lang]}>
        <FormattedMessage id="title" />
        <br />
        <br />
        <button onClick={() => setLang("tr-TR")}>TR</button>
        <br />
        <button onClick={() => setLang("en-EN")}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
