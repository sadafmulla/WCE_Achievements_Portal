import { useEffect, useState } from "react";
import CategorySelector from "./components/CategorySelector/CategorySelector";
import EntryList from "./components/EntryList/EntryList";
import { fetchCategoryFeeds } from "./lib";
import feeds from "./assets/feeds";
import './App.css';

const categoryList = Object.keys(feeds);
const App = () => {
  const [categories, setCategories] = useState([]);
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    setCategories(categoryList);
  }, []);

  const handleSelect = (selectedCategory) => {
    setEntries([]);
    fetchCategoryFeeds(selectedCategory, handleEntriesMerge);
  }

  const handleEntriesMerge = (data) => {
    setEntries((prev) => {
      return prev.concat(data).sort((a, b) => {
        const dateA = new Date(a.publishDate);
        const dateB = new Date(b.publishDate);
        return dateA > dateB ? -1 : 1;
      });
    });
  };

  return (
    <div className="App">
      <header>
        <h3>{`WCE Achievements Portal`}</h3>
        <hr></hr>
      </header>
      <CategorySelector categories={categories} onSelect={handleSelect} />
  
      <EntryList entries={entries} />

      




      <div class="page-container">
  <div class="create-post-container">
    <div class="post-container--first-row">
      <div class="first-row--thumb">
        <img alt="owner-thumbnail" src="https://i.pravatar.cc/150?img=8" width="100" height="100"/>
      </div>
      <div class="first-row--text">
        <input type="text" class="first-row--start-post" placeholder="START A POST"/>
      </div>
    </div>
    <div class="post-container--second-row">
      <ul class="post-icons">
        <li class="post-icon-container">
          <a href="#" class="post-icon--link">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-archive-fill" viewBox="0 0 16 16">
            <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"/>
          </svg>
            Archive
          </a>
        </li>
        <li class="post-icon-container">
          <a href="#" class="post-icon--link">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
</svg>
            Video
          </a>
        </li>
        <li class="post-icon-container">
          <a href="#" class="post-icon--link">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-event" viewBox="0 0 16 16">
  <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
</svg>
            Event
          </a>
        </li>
        <li class="post-icon-container">
          <a href="#" class="post-icon--link">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stickies" viewBox="0 0 16 16">
  <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5V13a1 1 0 0 0 1 1V1.5a.5.5 0 0 1 .5-.5H14a1 1 0 0 0-1-1H1.5z"/>
  <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v11A1.5 1.5 0 0 0 3.5 16h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 16 9.586V3.5A1.5 1.5 0 0 0 14.5 2h-11zM3 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V9h-4.5A1.5 1.5 0 0 0 9 10.5V15H3.5a.5.5 0 0 1-.5-.5v-11zm7 11.293V10.5a.5.5 0 0 1 .5-.5h4.293L10 14.793z"/>
</svg>
            Article
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>







    </div>
  );
}

export default App;
