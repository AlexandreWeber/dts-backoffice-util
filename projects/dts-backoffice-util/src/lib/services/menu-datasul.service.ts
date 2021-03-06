import { Injectable } from '@angular/core';

@Injectable()
export class MenuDatasulService {

  constructor() { }

  public callProgress(program) {

    /**
     * var program = {};
     * program['prg'] = "cd0210";
     * program['params'] = '01|123456'
     */

    parent.postMessage({ program }, '*');
  }

  public sendNotification(notification) {

    /**
     * var notification = {};
     * notification['type'] = 'success';
     * notification['title'] = 'Notification Title'
     * notification['detail'] = 'Notification Detail'
     */

    parent.postMessage({ notification }, '*');
  }

  public openPath(programName: string, params: any, parent: boolean = true): void {
    const datasulPath = window.location.href.indexOf('totvs-menu') > 0 ? 'totvs-menu' : 'menu-html';
    const baseUrl = `/${datasulPath}/#/${datasulPath}/program-html/${programName}/#`;

    if (parent) {
      window.open(`${baseUrl}/${params}`, '_parent');
    } else {
      window.open(`${baseUrl}/${params}`);
    }
  }
}
