import Attachment from "./Attachment";
import { UniqueId } from "./Unique";
import getUniqueId from "../utils/getUniqueId";

enum ImageFormat {
  JPG = 'JPG',
  PNG = 'PNG',
  SVG = 'SVG',
  GIF = 'GIF',
}

class Image implements Attachment {
  private format: ImageFormat;
  private url: string;
  private title: string;
  private id: UniqueId;

  // The static keyword means the property belongs to the
  // class itself and not to any instantiations of the class.
  // --
  // const img = new Image();
  // img.Format // err
  // Image.Format // success
  static readonly Format = ImageFormat;

  constructor(
    title: string,
    format: ImageFormat,
    url: string,
  ) {
    this.title = title;
    this.url = url;
    this.format = format;
    this.id = getUniqueId();
  }

  getId(): UniqueId {
    return this.id;
  }

  getSummary(prefix: string = ''): string {
    const lines = [
      'Attachment Type: Image',
      `Title: ${this.title}`,
      `Format: ${this.format}`,
      `URL: ${this.url}`,
    ];

    return lines
      .map(line => `${prefix}${line}`)
      .join('\n');
  }

  upload(): Promise<boolean> {
    // we'll mimick this behavior by returning a
    // Promise that always resolves to true
    return Promise.resolve(true);
  }
}

export default Image;
