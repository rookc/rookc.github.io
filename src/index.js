import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () =>{
	return(
		<div className = "ui container comments">
		<ApprovalCard>
			<CommentDetail 
			author ="Bob"  
			timeAgo="Today at 4:45PM"     
			content="awesome"
			avatar={faker.image.avatar()}
			/>
		</ApprovalCard>

		
			<CommentDetail 
			author ="Alex" 
			timeAgo="Today at 2:00AM"     
			content="great"
			avatar = {faker.image.avatar()}
			/>
			<CommentDetail 
			author ="Jane" 
			timeAgo="Yesterday at 5:00PM" 
			content="amazing"
			avatar = {faker.image.avatar()}
			/>

		</div>




		);
};

ReactDOM.render(<App/>, document.querySelector('#root'));