
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";
import { useState, useEffect } from "react";
import "./App.css";

const messages = {
  "tr-TR" : {
    title : "Merhaba Dünya",
    description : "3 Yeni Mesajınız Var"
  },

  "en-US" : {
    title : "Hello World",
    description : "You Have 3 New Messages"
  }

};

function App() {

  const isLocale = localStorage.getItem("locale");
  const defaultLocale = isLocale ? isLocale : navigator.languages[4];
  const [locale, setLocale] = useState(defaultLocale);

  useEffect(() => {
    localStorage.setItem("locale", locale)
  }, [locale]);

  console.log(navigator)
  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages[locale]}>
        <FormattedMessage id="title" />
        <p>
          <FormattedMessage id="description" />
        </p>
        <br />
        <br />
        <button onClick={() => setLocale("tr-TR")}>TR</button>
        <br />
        <button onClick={() => setLocale("en-US")}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
