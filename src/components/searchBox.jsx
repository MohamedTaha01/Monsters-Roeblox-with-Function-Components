import { Component } from "react";

class SearchBox extends Component {
  render() {
    const { onChangeH, className, placeholder } = this.props;
    return <input type="search" onChange={onChangeH} className={className} placeholder={placeholder} />;
  }
}
export default SearchBox;
