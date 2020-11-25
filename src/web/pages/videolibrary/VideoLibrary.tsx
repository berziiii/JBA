import React from "react";
import {Observer} from "mobx-react";
import {BaseComponent} from "../../components/BaseComponent";
import {VideoLibraryProps, VideoLibraryState} from "./VideoLibraryInterface";

// import styles from "./VideoLibrary.module.scss";

export class VideoLibrary<P extends VideoLibraryProps = VideoLibraryProps, S extends VideoLibraryState = VideoLibraryState> extends BaseComponent {
  state: VideoLibraryState = {};

  constructor(props: VideoLibraryProps) {
    super(props);
  }

  render() {
    return <Observer>{() => <h1>Video Library</h1>}</Observer>;
  }
}
