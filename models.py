# Previous imports remain...
from flask_sqlalchemy import SQLAlchemy
# from flask_migrate import Migrate

db = SQLAlchemy()
# migrate = Migrate(app, db)

'''
setup_db(app):
setup_db(app):
    binds a flask application and a SQLAlchemy service
'''
def setup_db(app):
    
    app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql+psycopg2://postgres:Kartel@localhost:5432/zpcproj"
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.app = app
    db.init_app(app)
    return db

def db_drop_and_create_all():
    db.drop_all()
    db.create_all()



class Project(db.Model):
    __tablename__ = 'projects'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(), nullable=False)
    bus_case = db.Column(db.Text(), nullable=False)
    background = db.Column(db.Text(), nullable=False)
    justification = db.Column(db.Text(), nullable=False)
    proj_goals = db.Column(db.JSON(), nullable=False)
    proj_team = db.Column(db.JSON(), nullable=True)
    prog_chcks = db.Column(db.JSON(), nullable=True)
    

    
    def __init__(self, name, bus_case, background, justification, proj_goals):
        self.name = name
        self.bus_case = bus_case
        self.background = background
        self.justification = justification
        self.proj_goals = proj_goals

    def AddTeam(self, team):
        self.team = team
        return "team added successfully"

    def json(self):
        return {
            "name": self.name,
            "bus_case": self.bus_case,
            "background": self.background,
            "justification": self.justification,
            "proj_goals": self.proj_goals
        }


class Action(db.Model):
    __tablename__ = 'actions'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(), nullable=False)
    act_date = db.Column(db.Date(), nullable=False)
    description = db.Column(db.Text(), nullable=False)
    project = db.Column(db.String(), nullable=False)
    actor = db.Column(db.String(), nullable=False)

    
    def __init__(self, name, act_date, description, project, actor):
        self.name = name
        self.project = project
        self.act_date = act_date
        self.description = description
        self.actor = actor


    def json(self):
        return {
            "name": self.name,
            "description": self.description,
            "act_date": self.act_date,
            "project": self.project,
            "actor": self.actor
        }



class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(), nullable=False)
    join_date = db.Column(db.Date(), nullable=False)
    position = db.Column(db.Text(), nullable=False)
    surname = db.Column(db.String(), nullable=False)

    
    def __init__(self, name, join_date, position, surname):
        self.name = name
        self.surname = surname
        self.join_date = join_date
        self.position = position


    def json(self):
        return {
            "name": self.name,
            "position": self.position,
            "join_date": self.join_date,
            "surname": self.surname,
        }



class Tender(db.Model):
    __tablename__ = 'tenders'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(), nullable=False)
    strt_date = db.Column(db.Date(), nullable=False)
    float_date = db.Column(db.Date())
    description = db.Column(db.Text(), nullable=False)
    signatories = db.Column(db.JSON())
    bidders = db.Column(db.JSON())


    
    def __init__(self, name, strt_date, description):
        self.name = name
        self.strt_date = strt_date
        self.description = description


    def json(self):
        return {
            "name": self.name,
            "description": self.description,
            "strt_date": self.strt_date,
        }
    
