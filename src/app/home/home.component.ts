import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NavigationEnd, ParamMap, Route, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ScrollService } from 'app/scroll.service';import { Title, Meta } from '@angular/platform-browser';
import { Observable, filter, switchMap } from 'rxjs';
import { RestService } from 'app/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  rotationAngle = {
    title: 'UI Testing',
    opacity: 1,
    text: "Spot and fix UI issues for a seamless, optimized, and visually appealing user experience. Effortlessly validate layouts, functionality, and user interactions with our advanced tools",
    angle: 3238
  };
  rotationAngles =
    [
      {
        title: 'Performance',
        opacity: 1,
        text: "Performance testing is a type of software testing that evaluates how a system performs under various workload conditions. Testers conduct it to assess the speed, responsiveness, stability, scalability, and resource usage of an application, website, or software component.",
        angle: 3139
      },
      {
        title: 'UI Testing',
        opacity: 1,
        text: "Spot and fix UI issues for a seamless, optimized, and visually appealing user experience. Effortlessly validate layouts, functionality, and user interactions with our advanced tools",
        angle: 3238
      }
      ,
      {
        title: 'Reporting',
        opacity: 1,
        text: "Reporting involves testers documenting and presenting the results of testing activities. It includes capturing and documenting test execution details, test coverage, defects identified, test metrics, and other relevant information. Test reports serve as a communication tool between testing teams, project managers, and stakeholders, offering them valuable insights into the quality and stability of the system under test.",
        angle: 3318
      }
      ,
      {
        title: 'API Testing',
        opacity: 1,
        text: "API testing, or Application Programming Interface testing, is a type of software testing that focuses on testing the APIs (Application Programming Interfaces) of an application. APIs act as bridges between different software components, allowing them to communicate and interact with each other. API testing involves testers verifying the functionality, reliability, performance, and security of these APIs.",
        angle: 3392
      }
    ];

  menuElements = [
    {
      dy: 16,
      startOffset: "38%",
      title: "Performance testing",
    },
    {
      dy: 16,
      startOffset: "0%",
      title: "Api testing",
    }
    ,
    {
      dy: 16,
      startOffset: "19%",
      title: "Reporting",
    },
    {
      dy: 16,
      startOffset: "63.5%",
      title: "UI Testing",
    }

  ]




  visibleCards: number[] = [];
  howItWorksCards: number[] = [];
  isAllCards: boolean = false;
  isAllHowItWorksCard: boolean = false;

  imgSrc = 0;
  incrementPercentage(originalPercentage, incrementBy) {
    
    const originalValue = parseFloat(originalPercentage);

    
    const newValue = originalValue + incrementBy;

    
    const newPercentage = newValue.toFixed(1) + '%';

    return newPercentage;
  }
  disableScroll(): void {


    document.body.style.overflow = 'hidden';
  }

  enableScroll(): void {


    document.body.style.overflowX = 'hidden';
    document.body.style.overflowY = 'scroll';
  }
  private previousScrollPosition = 0;
  @HostListener('window:wheel', ['$event'])
  onWheel(event: WheelEvent): void {
    //console.log("event--",event);
    console.log("windowww", window.scrollY);
    // console.log("event.clientX--",event.clientX);
    // console.log("event.clientY--",event.clientY);

    // console.log("event.deltaX--",event.deltaX);
    // console.log("event.deltaY--",event.deltaY);

    // console.log("event.offsetX--",event.offsetX);
    // console.log("event.offsetY--",event.offsetY);

    console.log("event.pageX--", event.pageX);
    console.log("event.pageY--", event.pageY);
    // Your wheel event handling logic here
    // const currentScrollPosition = ;
    // if (currentScrollPosition > this.previousScrollPosition) {
    //   console.log('Scrolling Down');
    // } else if (currentScrollPosition < this.previousScrollPosition) {
    //   console.log('Scrolling Up');
    // }

    // Update the previous scroll position
    // this.previousScrollPosition = currentScrollPosition;

    const targetElement = event.target as HTMLElement;


    // Check if the target element has a class
    if (targetElement.classList && targetElement.classList.contains('circular-menu')) {
      // Get the class list as an array

      this.rotate(); 


      this.disableScroll()
      // Log the classes
    }
    else {
      this.enableScroll();
    }
  }
  indexCounter: any = 0;
  rotate() {
    // rotate(3139 395 395)
    if (this.indexCounter == 4) {
      this.indexCounter = 0;
    }

    console.log("indexCounter--", this.indexCounter);
    console.log("rotationAngles--", this.rotationAngles);
    this.rotationAngle = this.rotationAngles[this.indexCounter];

    // this.indexCounter = this.indexCounter == 3 ? 0 : this.indexCounter ++;
    this.indexCounter++;

  }
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
    private meta: Meta, private route: Router,private rest:RestService) { 
    //  console.log("pageTitle  --- ",pageTitle);

    

     
    }



  ngOnInit() {

    this.route.events.pipe(filter((event)=> event instanceof NavigationEnd)).subscribe(async (event: NavigationEnd)=>{
      console.log("event --- ",event);

      const url = event.url.split('/')[1];

      console.log("url---",url);
     

      // this.meta.addTag({name: 'keywords', content: url});
      // this.meta.addTag({name: 'description', content: url+'Stellar tools'});
      // this.meta.addTag({name: 'author', content: url+'Stellar'});
      // this.meta.addTag({name: 'robots', content: url+'stellar, Integrations'});

     const seoData :any = this.rest.getSeoData(url);

     console.log("seoData",seoData);

      this.titleService.setTitle(seoData?.g_script1);
      
    })


    this.scrollService.getScrollToPositionSubject().subscribe(() => {
      // Scroll to the specific position
      console.log('home')
      setTimeout(() => {
        const element = document.getElementById('specificPositionElement');
        if (element) {
          element.scrollIntoView();
        }
      }, 500);
     
    });
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
        // If the length is not greater than chunkSize, return the original string as a single-element array
        return [inputString];
    }
}
}
