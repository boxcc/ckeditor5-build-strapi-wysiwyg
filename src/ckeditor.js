import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Subscript,
  Superscript,
  Code,
} from '@ckeditor/ckeditor5-basic-styles/src/index';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import {
  Image,
  ImageInsert,
  ImageCaption,
  ImageStyle,
  ImageToolbar,
  ImageResize,
  ImageResizeEditing,
  ImageResizeButtons,
  ImageUploadEditing,
  ImageUploadUI,
  ImageUploadProgress,
} from '@ckeditor/ckeditor5-image/src/index';
import { Indent, IndentBlock } from '@ckeditor/ckeditor5-indent/src/index';
import { Link, LinkImage, AutoLink } from '@ckeditor/ckeditor5-link/src/index';
import { List, ListStyle, TodoList } from '@ckeditor/ckeditor5-list/src/index';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import {
  Table,
  TableToolbar,
  TableProperties,
  TableCellProperties,
} from '@ckeditor/ckeditor5-table/src/index';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import {
  SpecialCharacters,
  SpecialCharactersEssentials,
} from '@ckeditor/ckeditor5-special-characters/src/index';
import HtmlEmbed from '@ckeditor/ckeditor5-html-embed/src/htmlembed';
import { Font, FontFamily } from '@ckeditor/ckeditor5-font/src/index';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';
import SourceEditing from '@ckeditor/ckeditor5-source-editing/src/sourceediting.js';
import { StrapiUploadAdapter } from '@gtomato/ckeditor5-strapi-upload-plugin';
import { StrapiMediaLib } from './strapi-medialib-plugin';
import sanitizeHtml from 'sanitize-html';
import FullScreen from './fullscreen-plugin';
import GeneralHtmlSupport from '@ckeditor/ckeditor5-html-support/src/generalhtmlsupport';
import { UpcastWriter } from '@ckeditor/ckeditor5-engine';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
  Essentials,
  Autoformat,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Subscript,
  Superscript,
  RemoveFormat,
  Code,
  BlockQuote,
  Heading,
  Image,
  ImageInsert,
  ImageCaption,
  ImageStyle,
  ImageToolbar,
  ImageResize,
  ImageResizeEditing,
  ImageResizeButtons,
  Indent,
  IndentBlock,
  Link,
  LinkImage,
  List,
  ListStyle,
  TodoList,
  MediaEmbed,
  Paragraph,
  PasteFromOffice,
  Table,
  TableToolbar,
  TextTransformation,
  HorizontalLine,
  Alignment,
  AutoLink,
  SpecialCharacters,
  SpecialCharactersEssentials,
  HtmlEmbed,
  StrapiUploadAdapter,
  StrapiMediaLib,
  Font,
  FontFamily,
  CodeBlock,
  FullScreen,
  TableProperties,
  TableCellProperties,
  SourceEditing,
  GeneralHtmlSupport,
  ImageUploadEditing,
  ImageUploadUI,
  ImageUploadProgress,
];

// Editor configuration.
ClassicEditor.defaultConfig = {
  toolbar: {
    items: [
      'heading',
      '|',
      'fontFamily',
      'fontSize',
      'fontColor',
      '|',
      'bold',
      'italic',
      'underline',
      'strikethrough',
      'subscript',
      'superscript',
      'removeFormat',
      'code',
      'link',
      'bulletedList',
      'numberedList',
      'todoList',
      'insertImage',
      'strapiMediaLib',
      '|',
      'alignment',
      'indent',
      'outdent',
      '|',
      'specialCharacters',
      'blockQuote',
      'insertTable',
      'mediaEmbed',
      'htmlEmbed',
      'codeBlock',
      'horizontalLine',
      '|',
      'fullScreen',
      'undo',
      'redo',
      '|',
      'sourceEditing',
    ],
    shouldNotGroupWhenFull: true,
  },
  image: {
    upload: { types: ['jpeg', 'png', 'gif', 'bmp', 'webp', 'tiff', 'svg+xml'] },
    styles: ['alignLeft', 'alignCenter', 'alignRight'],
    resizeOptions: [
      {
        name: 'resizeImage:original',
        value: null,
        icon: 'original',
      },
      {
        name: 'resizeImage:50',
        value: '50',
        icon: 'medium',
      },
      {
        name: 'resizeImage:75',
        value: '75',
        icon: 'large',
      },
    ],
    toolbar: [
      'imageStyle:inline',
      'imageStyle:block',
      'imageStyle:side',
      'imageStyle:alignLeft',
      'imageStyle:alignCenter',
      'imageStyle:alignRight',
      '|',
      'imageTextAlternative',
      '|',
      'resizeImage:50',
      'resizeImage:75',
      'resizeImage:original',
      '|',
      'linkImage',
    ],
  },
  table: {
    contentToolbar: [
      'tableColumn',
      'tableRow',
      'mergeTableCells',
      'tableProperties',
      'tableCellProperties',
    ],
  },
  heading: {
    options: [
      {
        model: 'paragraph',
        title: 'Paragraph',
        class: 'ck-heading_paragraph',
      },
      {
        model: 'heading1',
        view: 'h1',
        title: 'Heading 1',
        class: 'ck-heading_heading1',
      },
      {
        model: 'heading2',
        view: 'h2',
        title: 'Heading 2',
        class: 'ck-heading_heading2',
      },
      {
        model: 'heading3',
        view: 'h3',
        title: 'Heading 3',
        class: 'ck-heading_heading3',
      },
      {
        model: 'heading4',
        view: 'h4',
        title: 'Heading 4',
        class: 'ck-heading_heading4',
      },
    ],
  },
  htmlEmbed: {
    showPreviews: true,
    sanitizeHtml: (inputHtml) => {
      const outputHtml = sanitizeHtml(inputHtml);
      return {
        html: outputHtml,
        hasChanged: true,
      };
    },
  },
  fontFamily: {
    options: [
      'default',
      'Arial, Helvetica, sans-serif',
      'Courier New, Courier, monospace',
      'Georgia, serif',
      'Lucida Sans Unicode, Lucida Grande, sans-serif',
      'Tahoma, Geneva, sans-serif',
      'Times New Roman, Times, serif',
      'Trebuchet MS, Helvetica, sans-serif',
      'Verdana, Geneva, sans-serif',
      'JetBrains Mono, monospace',
      'Lato, Inter, sans-serif',
    ],
  },
  link: {
    defaultProtocol: 'http://',
    decorators: [
      {
        mode: 'manual',
        label: 'Open in a new tab',
        defaultValue: true,
        attributes: {
          target: '_blank',
          rel: 'noopener noreferrer',
        },
      },
      {
        mode: 'manual',
        label: 'Downloadable',
        attributes: {
          download: 'download',
        },
      },
    ],
  },
  htmlSupport: {
    allow: [
      // Enables all HTML features.
      {
        name: /.*/,
        attributes: true,
        classes: true,
        styles: true,
      },
      {
        name: 'svg',
        attributes: true,
        classes: true,
        styles: true,
      },
    ],
    disallow: [
      // {
      //   attributes: [
      //     { key: /^on(.*)/i, value: true },
      //     {
      //       key: /.*/,
      //       value: /(\b)(on\S+)(\s*)=|javascript:|(<\s*)(\/*)script/i,
      //     },
      //     { key: /.*/, value: /data:(?!image\/(png|jpg|jpeg|gif|webp))/i },
      //   ],
      // },
      // { name: 'script' },
    ],
  },
  // This value must be kept in sync with the language defined in webpack.config.js.
  language: 'en',
};

ClassicEditor.UpcastWriter = UpcastWriter;
