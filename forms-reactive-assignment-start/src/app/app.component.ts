import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CustomValidators } from "./custom-validators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  forbiddenProjectName = "Test";
  projectStatus = ["Stable", "Critical", "Finished"];

  ngOnInit() {
    this.projectForm = new FormGroup({
      projectName: new FormControl(
        null,
        [, CustomValidators.invalidProjectName],
        CustomValidators.asyncInvalidProjectName
      ),
      mail: new FormControl(null, [Validators.required, Validators.email]),
      projectStatus: new FormControl("Critical"),
    });
  }
  onSubmit() {
    console.log(this.projectForm.value);
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (control.value === this.forbiddenProjectName) {
      return { " nameIsForbidden": true };
    }
    return null;
  }
}
