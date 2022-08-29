import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './JqueryspfxWpWebPart.module.scss';
import * as strings from 'JqueryspfxWpWebPartStrings';

export interface IJqueryspfxWpWebPartProps {
  description: string;
}
import * as $ from 'jquery';
import * as bootstrap from 'bootstrap';

require('../../../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css');


export default class JqueryspfxWpWebPart extends BaseClientSideWebPart<IJqueryspfxWpWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `<div class="container">
    <div class="card bg-light">
    <div class="card-header"><h4><i class="fab fa-windows text-dark fa-lg"></i> &nbsp; &nbsp;jQuery, Bootstrap & Font Awesome Demo</h4></div>
    <div class="card-body">
        <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="customCheck" name="example1">
            <label class="custom-control-label" for="customCheck">Check this custom checkbox</label>
        </div>
        <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" id="switch1">
            <label class="custom-control-label" for="switch1">Toggle me</label>
        </div>
        <div class="custom-control custom-radio">
            <input type="radio" class="custom-control-input" id="customRadio" name="example1" value="customEx">
            <label class="custom-control-label" for="customRadio">Custom radio</label>
        </div>
        <div>
            <select name="cars" class="custom-select">
                <option selected>Custom Select Menu</option>
                <option value="volvo">Volvo</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
            </select>
        </div>
        <div>
            <label for="customRange">Custom range</label>
            <input type="range" class="custom-range" id="customRange" name="points1">
        </div>
        <div class="custom-file">
            <input type="file" class="custom-file-input" id="customFile">
            <label class="custom-file-label" for="customFile">Choose file</label>
        </div>
    </div>
    <div class="card-footer"><i class="fab fa-twitter fa-lg text-info"></i> @altfo <span class="font-italic text-info" id="texthere"></span><div class="col text-right"><i class="fas fa-atom fa-spin text-right text-info fa-lg"></i></div></div>
</div>
    </div>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <h3>First Item</h3>
          <p>First Item Description</p>
        </div>
        <div class="carousel-item">
          <h3>Second Item</h3>
          <p>Second Item Description</p>
        </div>
        <div class="carousel-item">
          <h3>Third Item</h3>
          <p>Third Item Description</p>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
      `;

      // Adding comment to make changes.
      $(document).ready(()=>{
        $("#texthere").text("please follow my twitter");
        $("#carouselExampleIndicators").carousel({
          interval:2000
        });
      });

  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
