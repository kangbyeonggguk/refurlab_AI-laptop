from fastapi import APIRouter, Depends, HTTPException, Response,Form,UploadFile
from sqlalchemy.orm import Session

from db.database import db
from models import account_model as account_models
from models import  laptop_info_list as laptop_info_list_models
from crud import laptop_sell_crud
from crud import laptop_info_list
from schemas import laptop_info_list as laptop_info_list_schema
from typing import Annotated,List

router = APIRouter(
)


@router.get("/admin/accounts", status_code=200)
def read_accounts(page: int = 1, name: str = None, db: Session = Depends(db.session)):
    page_size = 7
    skip = (page - 1) * page_size

    accounts_query = db.query(account_models.Account)

    if name is not None:
        accounts_query = accounts_query.filter(account_models.Account.nickname.like(f"%{name}%"))

    accounts = accounts_query.offset(skip).limit(page_size).all()
    data_count = accounts_query.count()


    if not accounts:
        raise HTTPException(status_code=404, detail="No admin accounts found")

    return {"accounts": accounts, "data_count": data_count}


@router.get("/admin/laptop_sell_info_list", status_code=200)
def read_laptop_sell_info_list(page: int = 1, name: str = None, db: Session = Depends(db.session)):
    

    list,data_count=laptop_sell_crud.get_laptop_sell_info_list(page=page,name=name,db=db)


    if not list:
        raise HTTPException(status_code=404, detail="No admin info found")
    
    return {"list":list,"data_count":data_count}

@router.delete("/admin/laptop_sell_info_list", status_code=200)
def delete_laptop_sell_info_list(sell_id:str=None,db: Session = Depends(db.session)):
    laptop_sell_crud.delete_laptop_sell_info_list(sell_id=sell_id,db=db)
    

@router.get("/admin/laptop_info_list", status_code=200)
def read_laptop_info_list(page: int = 1, name: str = None, db: Session = Depends(db.session)):
    list,data_count=laptop_info_list.get_laptops_info(page=page,name=name,db=db)
    if not list:
        raise HTTPException(status_code=404, detail="No admin info found")
    return {"list":list,"data_count":data_count}


@router.patch("/admin/laptop_info_list", status_code=200)
def patch_laptop_info_list(info:laptop_info_list_schema.PatchLaptopinfo, db: Session = Depends(db.session)):
    laptop_info_list.patch_laptops_info(info=info,db=db)

@router.post("/admin/laptop_info_list", status_code=200)
async def create_laptop_info_list(device_name: Annotated[str, Form()],screen_size: Annotated[str, Form()],business_usage: Annotated[str, Form()],internet_lecture_usage: Annotated[str, Form()],gaming_usage: Annotated[str, Form()],purchase_limit: Annotated[str, Form()],delivery_fee: Annotated[str, Form()],manufacturing_company: Annotated[str, Form()],brand: Annotated[str, Form()],files: List[UploadFile],db: Session = Depends(db.session)):
    await laptop_info_list.create_laptops_info(device_name=device_name,screen_size=screen_size,business_usage=business_usage,internet_lecture_usage=internet_lecture_usage,gaming_usage=gaming_usage,purchase_limit=purchase_limit,delivery_fee=delivery_fee,manufacturing_company=manufacturing_company,brand=brand,files=files,db=db)

@router.delete("/admin/laptop_info_list", status_code=200)
def delete_laptop_info_list(info_id:str=None,db: Session = Depends(db.session)):
    laptop_info_list.delete_laptops_info(info_id=info_id,db=db)