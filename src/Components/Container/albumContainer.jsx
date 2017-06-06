import React, { Component } from 'react';
import {GetAlbum} from '../../Components/Presentation/getAlbumDataButton';
import {AlbumList} from '../../Components/Presentation/listPresentation';
import {getAlbum} from '../../serviceCalls/albumDataService';

export default class AlbumContainer extends Component {
    constructor(){
        super();
        this.getData = this.getData.bind(this);
        this.state ={
            albumList : [],
            btnName: "fetch Data"
        }
}

getData(){
this.setState({
    btnName:'fetching data............'
})
getAlbum((data)=>{
this.setState({albumList: data, btnName:'Data Fetched!!!'});
});

}
    
    render() {
        return (
            <div className="container">
                <GetAlbum btnName ={this.state.btnName} getData={this.getData} />
                <AlbumList albums={this.state.albumList}/>
            </div>
        )
    }
}
