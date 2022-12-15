import { Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  CallTabs(event: any) {
    let TabBtn = event.target;
    let Tab__Button = document.querySelectorAll(".Button-Section__Tab");
    let Section = document.querySelectorAll("section");
    let TabIndex = TabBtn.getAttribute("Tab__Index");

    Section.forEach(section => {
      let SectionIndex = section.getAttribute("Section__Index");
      if(SectionIndex == TabIndex){
        Tab__Button.forEach(btns => btns.classList.remove('active'));
        Section.forEach(sec => sec.setAttribute("Section__Active", "false"));
        section.setAttribute("Section__Active", "true");
        TabBtn.classList.add('active');
      }
    });
  }
}
