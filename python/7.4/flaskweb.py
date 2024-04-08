from flask import Flask,request,jsonify,render_template
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
app=Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///test/db'
db=SQLAlchemy(app)

class stock(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    stock=db.Column(db.String(200),nullable=False)
    price=db.Column(db.Float,nullable=False)
    date_create=db.Column(db.DateTime,default=datetime.utcnow)

    def __repr__(self):
        return '<stock %r>' %self.id




@app.route('/')
def home_page():
    return render_template('index.html')



if __name__=='__main__':
    app.run(debug=True)