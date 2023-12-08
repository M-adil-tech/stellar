import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ParamMap, Route } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ScrollService } from 'app/scroll.service';import { Title, Meta } from '@angular/platform-browser';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-whysteller',
  templateUrl: './whysteller.component.html',
  styleUrls: ['./whysteller.component.scss']
})
export class WhystellerComponent implements OnInit {


  item: any = [
    {
      name: "Codeless Testing",
      desc: "Stellar's codeless testing results in hassle - free and efficient testing. This revolutionary feature enables manual testers to create automated tests without having to write a single line of code."
    },
    {
      name: "Tool Empowerment",
      desc: "Stellar is a comprehensive testing solution that empowers organizations and engineers by offering support for multiple testing types, including frontend and backend testing. By leveraging Stellar's powerful features, you can enhance collaboration, accelerate testing cycles, and achieve greater transparency in your testing efforts."
    },
    {
      name: "CI/CD Integration",
      desc: "Stellar excels at seamlessly integrating with CI/CD pipelines and automating the testing process as an integral part of the continuous integration and delivery workflow. By integrating Stellar into your CI/CD pipeline, you can ensure that every code change or new feature is thoroughly tested before it is deployed to production."
    },
    {
      name: "AI (Auto Healing)",
      desc: "Stellar leverages Artificial Intelligence (AI) to enhance test automation with its Auto-Healing feature. The AI-powered behavior of Stellar enables it to automatically detect changes in objects or elements within a test scenario that may cause failures. Stellar intelligently analyzes the changes and determines the best course of action to correct the test scenario, ensuring that it can continue running smoothly."
    },
    {
      name: "Debugging Capabilities",
      desc: "Stellar's powerful debugging features empower testers and developers to efficiently identify and resolve issues during the testing process. By providing extensive logs and intuitive debugging tools, Stellar empowers teams to effectively address issues and deliver high-quality software with confidence."
    },
    {
      name: "Reporting & Analytics",
      desc: "Stellar takes reporting to the next level by generating comprehensive and customized dashboards that provide in-depth insights into test results. These dashboards include detailed logs, screenshots, graphs, and metrics, enabling teams to perform effective analysis. Stellar structures the reporting based on popular reporting frameworks like Report Portal.io, Allure Reporting, and Extend reports for all Scrum Teams to Executives."
    },
    {
      name: "Data Bank Management",
      desc: "Stellar offers powerful test data management capabilities, allowing users to effectively manage their test data. It provides seamless integration with various data sources, enabling data-driven testing where test scenarios can be executed with different sets of data. It also supports data import and export functionalities, making it easy to migrate test data across environments or share data with other teams or systems."
    },

    {
      name: "Integration of Tools",
      desc: "Stellar offers seamless integration with a variety of popular tools, including Jenkins, Git, and JIRA, to facilitate enhanced collaboration and automation workflows in the testing process. Through this, Stellar empowers testing teams to leverage existing infrastructure and workflows, eliminating silos and enhancing collaboration across different teams."
    },
  ]
  visibleCards: number[] = [];
  howItWorksCards: number[] = [];
  isAllCards: boolean = false;
  isAllHowItWorksCard: boolean = false;

  imgSrc = 0;
  




  showNextCard() {
    if (this.visibleCards.length == 4) {
      this.isAllCards = true;
    } else if (this.visibleCards.length == 0) {
      this.isAllCards = false;
    }
    if (!this.isAllCards) {
      const nextCardIndex = this.visibleCards.length + 1;
      this.visibleCards.push(nextCardIndex);
    } else {
      this.visibleCards.pop();
    }

    console.log(this.visibleCards);
  }

  showHowItWorksCards() {
    if (this.howItWorksCards.length == 5) {
      this.isAllHowItWorksCard = true;
    } else if (this.howItWorksCards.length == 0) {
      this.isAllHowItWorksCard = false;
    }
    if (!this.isAllHowItWorksCard) {
      const nextCardIndex = this.howItWorksCards.length + 1;
      this.howItWorksCards.push(nextCardIndex);
    } else {
      this.howItWorksCards.pop();
    }

    console.log(this.howItWorksCards);
  }
  pageTitle$: Observable<string>;
  constructor(private el: ElementRef,
    public scrollService: ScrollService,private titleService: Title,
    private meta: Meta, private route: ActivatedRoute,) { 

      this.titleService.setTitle('Resolved using');
      this.meta.addTag({name: 'keywords', content: 'Angular Project, Create Angular Project'});
      this.meta.addTag({name: 'description', content: 'Angular project training on rsgitech.com'});
      this.meta.addTag({name: 'author', content: 'rsgitech'});
      this.meta.addTag({name: 'robots', content: 'index, follow'});

      this.pageTitle$ = this.route.paramMap.pipe(
        switchMap((params: ParamMap) => {  
          const pageTitle = params.get('title');
          // Do something with the pageTitle, e.g., set it as the dynamic title
          console.log('Page Title:', pageTitle);
          return pageTitle; // You can return it or use it as needed
        })
      );
    //  console.log("pageTitle  --- ",pageTitle);

    

     
    }
    nextImg() {
      this.imgSrc = this.imgSrc + 1;
  
      if (this.imgSrc > 3) {
        this.imgSrc = 0;
      }
    }
  
    splitString(inputString, chunkSize = 70) {
      // Check if the length of the input string is greater than chunkSize
      if (inputString.length > chunkSize) {
          // Calculate the number of chunks needed
          const numChunks = Math.ceil(inputString.length / chunkSize);
          
          // Use a loop to create the array of substrings
          const substrings = [];
          for (let i = 0; i < numChunks; i++) {
              substrings.push(inputString.substr(i * chunkSize, chunkSize));
          }
          
          return substrings;
      } else {
          
          return [inputString];
      }
  }

  ngOnInit(): void {
  }



}
