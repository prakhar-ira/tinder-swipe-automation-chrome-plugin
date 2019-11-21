import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-chrome-tinder-extension';

  constructor() {
    // chrome.pageAction.onClicked.addListener((tab) => {
    //   chrome.tabs.executeScript(
    //     tab.id,
    //     { code: `
    //     const likeButton = document.querySelector('button[aria-label="Like"]');
    //     const interval = setInterval(() => {
    //       const modalShow = document.querySelector('div[role="dialog"]');
    //         if (modalShow) {
    //           clearInterval(interval);
    //           return;
    //         } else {
    //         likeButton.click();
    //         }
    //       }, 1000);
    //     ` }
    //   );
    // });
  }
  startSwipe() {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.tabs.executeScript(
      tabs[0].id,
      { code: `
      const likeButton = document.querySelector('button[aria-label="Like"]');
      const interval = setInterval(() => {
        const modalShow = document.querySelector('div[role="dialog"]');
          if (modalShow) {
            clearInterval(interval);
            const xpath = "//span[text()='No Thanks']";
            const matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            return matchingElement.click();
          } else {
          likeButton.click();
          }
        }, 1000);
      ` }
    );
  });
}
}
